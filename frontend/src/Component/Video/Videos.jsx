import React from 'react';
import Card from './Card';

 const dummyVideos = [
    {
      _id: '1',
      title: 'The Beauty of Nature',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/09/23/17/34/vietnam-9069634_1280.png',
      details: 'A stunning view of the mountains and valleys.',
      views: 1200,
      createdAt: '5 hours ago', // ISO date format
      userId: '101',
      channel: {
        name: 'Nature Explorer',
        img: 'https://cdn.pixabay.com/photo/2023/11/02/05/23/woman-8359670_1280.png'
      }
    },
    {
      _id: '2',
      title: 'Cooking 101: Easy Recipes',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/09/23/17/34/vietnam-9069634_1280.png',
      details: 'Learn how to cook simple and delicious meals.',
      views: 850,
      createdAt: '3 hours ago', // ISO date format
      userId: '102',
      channel: {
        name: 'Chef Master',
        img: 'https://cdn.pixabay.com/photo/2023/11/02/05/23/woman-8359670_1280.png'
      }
    },
    {
      _id: '3',
      title: 'Tech Innovations in 2024',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/09/23/17/34/vietnam-9069634_1280.png',
      details: 'Explore the latest trends in technology this year.',
      views: 2300,
      createdAt: '4 hours ago', // ISO date format
      userId: '103',
      channel: {
        name: 'Tech Guru',
        img: 'https://cdn.pixabay.com/photo/2023/11/02/05/23/woman-8359670_1280.png'
      }
    },
    {
      _id: '4',
      title: 'Traveling Through Europe',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/09/23/17/34/vietnam-9069634_1280.png',
      details: 'An unforgettable journey across European cities.',
      views: 500,
      createdAt: '2 hours ago', // ISO date format
      userId: '104',
      channel: {
        name: 'Wanderlust',
        img: 'https://cdn.pixabay.com/photo/2023/11/02/05/23/woman-8359670_1280.png'
      }
    },
    {
      _id: '5',
      title: 'Yoga for Beginners',
      imageUrl: 'https://cdn.pixabay.com/photo/2024/09/23/17/34/vietnam-9069634_1280.png',
      details: 'A guide to starting your yoga practice at home.',
      views: 900,
      createdAt: '8 hours ago', // ISO date format
      userId: '105',
      channel: {
        name: 'Yoga Teacher',
        img: 'https://cdn.pixabay.com/photo/2023/11/02/05/23/woman-8359670_1280.png'
      }
    }
  ];
  

export default function Videos() {
  return (
    <div style={{"display":"flex", "marginLeft":"120px", "gap":"40px"}}>
         {dummyVideos.map((video) => (
        <Card key={video._id} video={video} channel={video.channel}/>
      ))}
    </div>
  )
}
