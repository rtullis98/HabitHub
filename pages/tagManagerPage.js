import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { getAllTags } from '../api/tagEndpoints';
import ListComponent from '../components/ListComponent';
import NewLableForm from '../components/NewLabelForm';

export default function TagManagerPage() {
  const [tags, setTags] = useState([]);

  const getTags = () => {
    getAllTags().then((data) => setTags(data));
  };

  useEffect(() => {
    getTags();
  }, []);

  const type = 'Tag';

  return (
    <div>
      <Head>
        <title>Tag Manager</title>
      </Head>
      <h1 className="py-3">Tags</h1>
      <div className="d-flex gap-5 pt-3">
        <div className="w-50">
          <table className="w-75" style={{ fontSize: '16px' }}>
            <tbody>
              {tags.map((tag) => (<ListComponent key={tag.id} item={tag.name} />))}
            </tbody>
          </table>
        </div>
        <div className="w-50">
          <NewLableForm onUpdate={getTags} type={type} />
        </div>
      </div>

    </div>
  );
}
