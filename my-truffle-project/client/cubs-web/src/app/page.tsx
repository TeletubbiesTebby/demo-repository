"use client"
import React, { useState, useEffect } from 'react';
import web3 from '../app/lib/web3';
import MyContract from '../app/lib/MyContract';

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const [newMessage, setNewMessage] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const initialMessage: string = await MyContract.methods.message().call();
        setMessage(initialMessage);
      } catch (error) {
        console.error('Error fetching message:', error);
        setError('Error fetching message. Please check the console for more details.');
      }
    };
    fetchMessage();
  }, []);

  const updateMessage = async () => {
    setError('');
    try {
      const accounts = await web3.eth.getAccounts();
      await MyContract.methods.updateMessage(newMessage).send({
        from: accounts[0],
        gas: '3000000' // Set a higher gas limit and make sure it's a string
      })
      .on('transactionHash', (hash: string) => {
        console.log('Transaction Hash:', hash);
      })
      .on('receipt', (receipt: any) => {
        console.log('Receipt:', receipt);
      })
      .on('error', (error: Error) => {
        console.error('Error during transaction:', error);
        setError('Transaction failed. Please check the console for more details.');
      });
      const updatedMessage: string = await MyContract.methods.message().call();
      setMessage(updatedMessage);
    } catch (error) {
      console.error('Error updating message:', error);
      setError('Transaction failed. Please check the console for more details.');
    }
  };

  return (
    <div>
      <h1>Smart Contract Message</h1>
      <p>Current Message: {message}</p>
      <input
        className='border-2'
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={updateMessage}>Update Message</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      
    </div>
  );
};

export default Home;