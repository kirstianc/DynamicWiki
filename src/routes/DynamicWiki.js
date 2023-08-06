import React from 'react';
import ButtonList from '../components/ButtonList';
import BlankImage from '../assets/images/gray.png';

/* find a way to auto-populate these images...
*  name + Image = NameImage, from the assets/images/dw_images/Name.(jpg|png)
*/ 
import TheSopranosImage from '../assets/images/dw_images/TheSopranos.jpg';
import JujutsuKaisenImage from '../assets/images/dw_images/JujutsuKaisen.jpg';
import OnePieceImage from '../assets/images/dw_images/OnePiece.jpg';
import FriendsImage from '../assets/images/dw_images/Friends.jpg';
import TheOfficeImage from '../assets/images/dw_images/TheOffice.jpg';

/* DynamicWiki.js is a wikipedia that changes information based on the user's current episode.
* Referencing Akash Joshi's article about Wikipedia Apps using React Hooks and Auth0
* https://auth0.com/blog/building-a-wikipedia-app-using-react-hooks-and-auth0/
*/
function DynamicWiki() {
    const items = [
        {
            title: 'The Sopranos',
            description: 'A mafia drama.',
            link: '/DynamicWiki/TheSopranos',
            image: TheSopranosImage,
        },
        {
            title: 'Jujutsu Kaisen',
            description: 'A demon hunting anime.',
            link: '/DynamicWiki/JujutsuKaisen',
            image: JujutsuKaisenImage,
        },
        {
            title: 'One Piece',
            description: 'A pirate adventure anime.',
            link: '/DynamicWiki/OnePiece',
            image: OnePieceImage,
        },
        {
            title: 'Friends',
            description: 'A sitcom about friends.',
            link: '/DynamicWiki/Friends',
            image: FriendsImage,
        },
        {
            title: 'The Office',
            description: 'A sitcom about office workers.',
            link: '/DynamicWiki/TheOffice',
            image: TheOfficeImage,
        }
    ];

    return (
        <div>
            <h1>DynamicWiki!</h1>
            <p>
                A wiki that changes information based on what episode you are on. This prevents spoilers and other information from ruining YOUR experience!
            </p>
            <br />
            <ButtonList items={items} />
        </div>
    );
}

export default DynamicWiki;
