import React from 'react';
import './Add.scss';
const Add = () => {
  return (
    <div className='add'>
      <div className='container'>
        <h1>Add New Gig</h1>
        <div className='sections'>
          <div className='left'>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              placeholder='I will do something i am really good at.'
            />
            <label htmlFor=''>Category</label>
            <select name='cats' id='cats'>
              <option value='design'>Design</option>
              <option value='Web Development'>Web Development</option>
              <option value='Animation'>Animation</option>
              <option value='Translation'>Translation</option>
              <option value='Wordpress'>Wordpress</option>
              </select>

              <label htmlFor=''>Cover Image</label>
              <input type='file' />
              <label htmlFor=''>Upload Image</label>
              <input type='file' multiple />
              <label htmlFor=''>Description</label>
              <textarea
                name=''
                id=''
                cols='30'
                rows='16'
                placeholder='Brief description to introduce your service to clients.'
              ></textarea>
              <button>Add</button>
          </div>

          <div className='right'>
              <label htmlFor="">Service Title</label>
                <input type="text" placeholder='e.g. One-Page Web Design' />
              <label htmlFor="">Short Description</label>
                <textarea name="" id="" cols="30" rows="10" placeholder='Short Description of your service.'> </textarea>
              <label htmlFor="">Delivery Time (e.g. 3Days)</label>
                <input type="number" min={1} />
              <label htmlFor="">Revision Number</label>
                <input type="number" min={1} />
              <label htmlFor="">Add Feature</label>
                <input type="text" placeholder='e.g. Page Design' />
                <input type="text" placeholder='e.g. File Uploading' />
                <input type="text" placeholder='e.g. Setting up a Domain' />
                <input type="text" placeholder='e.g. Hosting' />

              <label htmlFor="">Price</label>
              <input type="number" min={60} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
