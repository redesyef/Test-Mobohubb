'use client';
import React, { useEffect, useState } from 'react';
import BasicModal from '../components/organisms/Modal';
import { getData } from '@/service/database';
import { placehoderData } from './types/placehoderData.type';
import BasicTable from '../components/organisms/Table';
import ReLoading from '../components/atoms/ReLoading';

const Home = () => {
  const [placeholderData, setPlaceholderData] = useState<placehoderData[]>([]);
  const [isLoading, setisLoading] = useState(true);
  const getPlaceHolders = async () => {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const data = await getData(url);
    setPlaceholderData(data);
    setisLoading(false);
  };
  useEffect(() => {
    getPlaceHolders();
  }, []);
  if (isLoading) {
    return <ReLoading />;
  }
  return (
    <>
      <main className="flex w-full justify-center ">
        <div className="max-w-5xl w-full flex flex-col">
          <BasicModal />

          <BasicTable data={placeholderData} />
        </div>
      </main>
    </>
  );
};

export default Home;
