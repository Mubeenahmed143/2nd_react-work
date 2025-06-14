import React, {useState  } from "react";
import { Card, Button } from 'react-bootstrap';
import { FaThumbsUp, FaComment, FaShare } from 'react-icons/fa';

function FacebookPost() {
    let [like,setlike] = useState(10);
    let [share,setshare] = useState(10);
    return(
        <Card style={{ width: '100%', maxWidth: '600px', margin: '20px auto', borderRadius: '10px', overflow: 'hidden' }}>
        {/* Post Header */}
        <Card.Header style={{ backgroundColor: '#fff', fontWeight: 'bold' }}>
          Your Girl!
        </Card.Header>
  
        {/* Video/Image */}
        <div style={{ position: 'relative' }}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVNN58XFDLxdqtwwWRSE924NjtuSryXFGxjg&s"
            alt="Post visual"
            style={{ width: '100%', height: 'auto' }}
          />
          {/* Subtitle on video */}
          <div style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '14px'
          }}>
            step back you'll have problems.
          </div>
        </div>
  
        {/* Reactions */}
        <Card.Body style={{ padding: '10px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#65676b', fontSize: '14px' }}>
            <span><FaThumbsUp color="#1877F2" /> {like}</span>
            <span>8K comments · {share} share</span>
          </div>
        </Card.Body>
  
        {/* Actions */}
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '8px 0', borderTop: '1px solid #ddd' }}>
          <Button onClick={()=>{setlike(like+1);
    console.log(like)
}} variant="light" style={{ flex: 1 }}><FaThumbsUp /> Like</Button>
          <Button variant="light" style={{ flex: 1 }}><FaComment /> Comment</Button>
          <Button onClick={()=>{setshare(share+1);
    console.log(share)
}} variant="light" style={{ flex: 1 }}><FaShare /> Share</Button>
        </div>
      </Card>
    );
}


export default FacebookPost;

