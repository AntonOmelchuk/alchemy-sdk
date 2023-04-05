import { useEffect, useState } from 'react';
import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function App() {
  const [block, setBlock] = useState({});

  useEffect(() => {
    async function getBlockNumber() {
      setBlock(await alchemy.core.getBlock());
    }

    getBlockNumber();
  });

  return (
    <div className="App">
      <div>
        <h1>Block Number: {block?.number}</h1>
      </div>
      <div>
        <h3>Transactions Count: {block?.transactions?.length}</h3>
        <h3>Gas Limit: {Number(block?.gasLimit || '0')}</h3>
        <h3>Gas Used: {Number(block?.gasUsed || '0')}</h3>
      </div>
    </div>
  );
}

export default App;
