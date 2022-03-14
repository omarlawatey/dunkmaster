import React from //, { useState }
'react';
import { Container, Button } from 'react-bootstrap';
import '../Styles/Ranks.scss';
import { dragonImage, ninjaRankImage, maouRankImage } from '../utils/images';
import { GiCheckMark, GiCrossMark } from 'react-icons/gi';

const Ranks = () => {
  // const [activeRank, setActiveRank] = useState(0);

  const roles = [
    { name: 'ninja', price: '$2.99', image: ninjaRankImage },
    { name: 'dragon', price: '$5.99', image: dragonImage },
    { name: 'shinigami', price: '$10.99', image: null },
    { name: 'maou', price: '$17.99', image: maouRankImage }
  ];

  const rolesProps = [
    {
      name: 'Duration',
      description: (
        <div>
          <div>Help someone</div>
          <div>Hi</div>
          <div>Hi</div>
          <div>Hi</div>
          <div>Hi</div>
          <div>Hi</div>
          <div>Hi</div>
          <div>Hi</div>
          <div>Hi</div>
          <div>Hi</div>
        </div>
      )
    },
    { name: 'Colors', description: '', image: null },
    { name: 'chat color', description: '', image: null },
    { name: 'Claim blocks', description: '', image: null },
    { name: 'Pets', description: '', image: null },
    { name: 'Fly', description: '', image: null },
    { name: 'Fly speed', description: '', image: null },
    { name: 'Set homes', description: '', image: null },
    { name: 'Break spawners', description: '', image: null },
    { name: 'Particles', description: '', image: null },
    { name: 'Hats', description: '', image: null },
    { name: 'Nick name', description: '', image: null },
    { name: 'Feed', description: '', image: null },
    { name: 'Heal', description: '', image: null },
    { name: 'Weather', description: '', image: null },
    { name: 'work bench', description: '', image: null },
    { name: 'Enderchest', description: '', image: null },
    { name: 'Anvil', description: '', image: null },
    { name: 'Glow', description: '', image: null },
    { name: 'Change time', description: '', image: null },
    { name: 'Fix Command', description: '', image: null },
    { name: 'Unlimited Fly Speed', description: '', image: null },
    { name: 'enchant', description: '', image: null },
    { name: 'SF-Charge', description: '', image: null },
    { name: 'weapon', description: '', image: null },
    { name: 'keep inventory', description: '', image: null },
    { name: 'money', description: '', image: null }
  ];

  const rolesFeatures = [
    [
      'Full season',
      'color grey',
      'color red',
      '2500',
      'Rex',
      'true-icon',
      'slow',
      '6',
      'true-icon',
      'true-icon',
      'true-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      '$2000'
    ],
    [
      'Full season',
      'color dark orange',
      'color orange',
      '4000',
      'Rex + flower',
      'true-icon',
      'normal',
      '8',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      '$4000'
    ],
    [
      'Monthly - LifeTime',
      'color dark green',
      'color light green',
      '7000',
      'slower + magnetic',
      'true-icon',
      'fast',
      '12',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      'false-icon',
      '$8000'
    ],
    [
      'Monthly - LifeTime',
      'color purple',
      'color violet',
      '15000',
      'cat + 1 custom',
      'true-icon',
      'very fast',
      '16',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      'true-icon',
      '$12000'
    ]
  ];

  return (
    <Container className="roles-container">
      {rolesFeatures.map((i, index) => {
        return (
          <div className="role-feature-column card" key={index}>
            <div className="role card" key={index}>
              {roles[index].image ? (
                <div className="role-image">
                  <img src={roles[index].image} alt="role" />
                </div>
              ) : (
                ''
              )}
              <p>{roles[index].name}</p>
              <p>{roles[index].price}</p>
              <Button variant="success" size="lg" className="buy-now-button">
                Buy Now
              </Button>
              <hr />
            </div>
            <div className="role-features">
              {i.map((x, index) => (
                <div className="role-feature" key={index}>
                  <span>{rolesProps[index].name}: </span>
                  <span
                    style={{
                      color:
                        x.split(' ')[0] === 'color'
                          ? x.split(' ').slice(1, 3).join('')
                          : x
                    }}
                  >
                    {x === 'true-icon' ? (
                      <GiCheckMark color="green" />
                    ) : x === 'false-icon' ? (
                      <GiCrossMark color="red" />
                    ) : x.includes('color') ? (
                      x.split(' ').slice(1, 3).join(' ')
                    ) : (
                      x
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </Container>
  );
};

export default Ranks;
