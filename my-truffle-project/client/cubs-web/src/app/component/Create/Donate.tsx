"use client"
import React, { useState, useEffect } from 'react';
import web3 from '@/app/lib/web3';
import MyContract from '@/app/lib/MyContract';

const Donate: React.FC = () => {
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
        <div className='grid place-items-center gap-5'>
            <div className="flex border-2 border-[#938E89] rounded-xl p-1 w-11/12  shadow-md">
                <p className="grid self-center text-center px-2 text-[20px] font-medium text-[#6A6262]">$</p>
                <input
                    className="w-full p-2 "
                    type="text"
                    placeholder="Enter your message"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
            </div>
            <button onClick={updateMessage}
            className='bg-[#A29A9A] px-5 py-2 rounded-2xl text-white font-semibold hover:bg-[#6A6262]'
            >
                Donate for use
            </button>
        </div>
    );
};

export default Donate;