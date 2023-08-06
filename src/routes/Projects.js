import React from 'react';
import ButtonList from '../components/ButtonList';
import BlankImage from '../assets/images/gray.png';
import FillboardImage from '../assets/images/project_images/Fillboard.png';
import UJMImage from '../assets/images/project_images/UJM.png';
import DynamicWikiImage from '../assets/images/project_images/DynamicWiki.png';

const Projects = () => {
  const items = [
    {
      title: 'DynamicWiki',
      description: 'Wiki based on YOUR current episode.',
      link: '/DynamicWiki',
      image: DynamicWikiImage,
    },
    {
      title: 'FillBoard',
      description: 'Online Party System for Real World benefits.',
      link: 'https://github.com/kirstianc/FillBoard',
      image: FillboardImage,
    },
    {
      title: 'ULTRA JUMP MANIA',
      description: 'Simple 2D platformer created inside the Unity engine.',
      link: 'https://github.com/kirstianc/ultra-jump-mania',
      image: UJMImage,
    },
    {
      title: 'SJSU CS151 REPOSITORY',
      description: 'Object-oriented design course at SJSU.',
      link: 'https://github.com/kirstianc/SJSU_CS151_SPRING2021',
      image: BlankImage,
    },
    {
      title: 'BASIC COUNTER',
      description: 'Counter with increment/decrement capabilities.',
      link: 'https://github.com/kirstianc/SIMPLE-COUNTER',
      image: BlankImage,
    },
  ];

  return (
    <div>
      <h2>Project Links:</h2>
      <ButtonList items={items} />
    </div>
  );
};

export default Projects;
