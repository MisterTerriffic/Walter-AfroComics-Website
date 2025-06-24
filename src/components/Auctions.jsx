import React, { useState, useEffect } from 'react';


function Auctions(){
    const [timeLeft, setTimeLeft] = useState(86400);
  const [highestBid, setHighestBid] = useState(0);
  const [highestBidder, setHighestBidder] = useState('');
  const [bid, setBid] = useState('');
  const [bidderName, setBidderName] = useState('');
  const [auctionEnded, setAuctionEnded] = useState(false);

   useEffect(() => {
    if (timeLeft <= 0) {
      setAuctionEnded(true);
      return;
    }
    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft])

    const handleBidSubmit = (e) => {
    e.preventDefault();
    const numericBid = parseFloat(bid);
    if (numericBid > highestBid && bidderName.trim()) {
      setHighestBid(numericBid);
      setHighestBidder(bidderName);
    }
    setBid('');
    setBidderName('');
  };
return (
    <div className="auction-container">
      <h1>Comic Book Auction</h1>

       <div className="auction-item">
        <img
          src="/images/IMG_0348.jpeg"
          alt="The Man in The Machine"
        />
        <h2>The Man in The Machine</h2>
        <p className="item-details">
          Starting at $0 | Ends in: {timeLeft} seconds
        </p>
        {auctionEnded && (
          <p className="auction-ended">Auction Ended</p>
        )}
      </div>

      <div className="bid-status">
        <p>Highest Bid: <strong>${highestBid.toFixed(2)}</strong></p>
        <p>Highest Bidder: <strong>{highestBidder || 'None yet'}</strong></p>
      </div>

      {!auctionEnded && (
        <form onSubmit={handleBidSubmit} className="bid-form">
          <input
            type="text"
            placeholder="Your Name"
            className="input"
            value={bidderName}
            onChange={(e) => setBidderName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Your Bid ($)"
            step="0.01"
            min={highestBid + 0.01}
            className="input"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
            required
          />
          <button type="submit">
            Place Bid
          </button>
        </form>
      )}
    </div>
  );
};

export default Auctions;