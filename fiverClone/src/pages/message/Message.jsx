import React from 'react';
import { Link } from 'react-router-dom';
import './message.scss';

const Message = () => {
  return (
    <div className='message'>
      <div className='container'>
        <span className='breadcrumbs'>
          <Link className='link' to='/messages'>MESSAGES</Link> > JOHN DOE>
        </span>
        <div className='messages'>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, unde aut aliquam molestias fuga soluta culpa iste saepe
              harum est minus voluptate maxime iure autem labore, reiciendis
              accusantium nesciunt. Cumque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Esse optio harum voluptatem eos nam
              quas voluptatibus voluptas totam omnis at culpa nobis, quasi sit
              asperiores pariatur recusandae, voluptatum, iste hic!
            </p>
          </div>
          <div className='item sender'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, unde aut aliquam molestias fuga soluta culpa iste saepe
              harum est minus voluptate maxime iure autem labore, reiciendis
              accusantium nesciunt. Cumque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Esse optio harum voluptatem eos nam
              quas voluptatibus voluptas totam omnis at culpa nobis, quasi sit
              asperiores pariatur recusandae, voluptatum, iste hic!
            </p>
          </div>
          <div className='item'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, unde aut aliquam molestias fuga soluta culpa iste saepe
              harum est minus voluptate maxime iure autem labore, reiciendis
              accusantium nesciunt. Cumque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Esse optio harum voluptatem eos nam
              quas voluptatibus voluptas totam omnis at culpa nobis, quasi sit
              asperiores pariatur recusandae, voluptatum, iste hic!
            </p>
          </div>
          <div className='item sender'>
            <img
              src='https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600'
              alt=''
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam, unde aut aliquam molestias fuga soluta culpa iste saepe
              harum est minus voluptate maxime iure autem labore, reiciendis
              accusantium nesciunt. Cumque? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Esse optio harum voluptatem eos nam
              quas voluptatibus voluptas totam omnis at culpa nobis, quasi sit
              asperiores pariatur recusandae, voluptatum, iste hic!
            </p>
          </div>
        </div>
        <hr/>
        <div className='write'>
          <textarea
            name=''
            placeholder='Write a message'
            id=''
            cols='30'
            rows='10'
          ></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;
