import React from 'react';
import Crumbs from '../components/Crumbs';
import Article from '../components/Article';
import Diff from '../components/Diff';

export default function Index() {
  const fakeArr = [
    {
      id: 1,
      heading: 'Blog',
      link: '/',
    },
    {
      id: 2,
      heading: 'Business',
      link: '/',
    },
    {
      id: 3,
      heading: 'Technology',
      link: '/',
    },
    {
      id: 4,
      heading: 'Management',
      link: '/',
    },
  ];
  return (
    <div className="indexWrap">
      <Crumbs crumb={fakeArr} />
      <div className="contentWrap">
        <Article />
        <Diff />
      </div>
    </div>
  );
}
