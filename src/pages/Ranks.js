import React from 'react'; //, { useState }
import { Container, Button } from 'react-bootstrap';
import '../Styles/Ranks.scss';
import {
  BreakSpawnerGif,
  particlesGif,
  feedHealGif,
  weatherGif,
  glowPng,
  daycCycleGif,
  fixCommandGif,
  enchantedGif,
  bossSetPng
} from '../utils/images';
import { GiCheckMark, GiCrossMark } from 'react-icons/gi';

const Ranks = () => {
  // const [activeRank, setActiveRank] = useState(0);

  const roles = [
    { name: 'ninja', price: '$2.99', image: null },
    { name: 'dragon', price: '$5.99', image: null },
    { name: 'shinigami', price: '$10.99', image: null },
    { name: 'maou', price: '$17.99', image: null }
  ];

  const rolesProps = [
    {
      name: 'Duration',
      description: (
        <div className="pop-up-prop">
          How much time would it take to lose your rank.
        </div>
      )
    },
    {
      name: 'Colors',
      description: (
        <div className="pop-up-prop">How your name would be colored.</div>
      ),
      image: null
    },
    {
      name: 'chat color',
      description: (
        <div className="pop-up-prop">
          How your chat messages would be colored.
        </div>
      ),
      image: null
    },
    {
      name: 'Claim blocks',
      description: (
        <div className="pop-up-prop">
          <p>/claimList</p>
          <p>How many claims do you have.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'Pets',
      description: (
        <div className="pop-up-prop">
          <p>/pets</p>
          <p>What type of pets you will get.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'Fly',
      description: (
        <div className="pop-up-prop">
          <p>/fly</p>
          <p>The ability to fly like creative mode.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'Fly speed',
      description: (
        <div className="pop-up-prop">How Fast you would be flying.</div>
      ),
      image: null
    },
    {
      name: 'homes',
      description: (
        <div className="pop-up-prop">
          <p>/home</p>
          <p>how many homes you can have.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'Break spawners',
      description: (
        <div className="pop-up-prop">The ability to break spawners.</div>
      ),
      image: BreakSpawnerGif
    },
    {
      name: 'Particles',
      description: (
        <div className="pop-up-prop">Visual Effects following you.</div>
      ),
      image: particlesGif
    },
    {
      name: 'Hats',
      description: (
        <div className="pop-up-prop">
          <p>/hats</p>
          <p>The ability to wear items on your head.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'Nick name',
      description: (
        <div className="pop-up-prop">
          <p>The ability to change your nickname in-game.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'Feed',
      description: (
        <div className="pop-up-prop">
          <p>/feed</p>
          <p>The ability to refill your hunger bar.</p>
        </div>
      ),
      image: feedHealGif
    },
    {
      name: 'Heal',
      description: (
        <div className="pop-up-prop">
          <p>/heal</p>
          <p>The ability to refill your health bar.</p>
        </div>
      ),
      image: feedHealGif
    },
    {
      name: 'Weather',
      description: (
        <div className="pop-up-prop">
          <p>/weather</p>
          <p>The ability to change weather.</p>
        </div>
      ),
      image: weatherGif
    },
    {
      name: 'work bench',
      description: <div className="pop-up-prop"></div>,
      image: null
    },
    {
      name: 'Enderchest',
      description: (
        <div className="pop-up-prop">
          <p>/enderchest</p>
          <p>The ability to access your enderchest any where.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'Anvil',
      description: (
        <div className="pop-up-prop">
          <p>/anvil</p>
          <p>The ability to change any item color.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'Glow',
      description: (
        <div className="pop-up-prop">
          <p>/eglow</p>
          <p>The ability to add an outline around your player.</p>
        </div>
      ),
      image: glowPng
    },
    {
      name: 'Change time',
      description: (
        <div className="pop-up-prop">
          <p>/day - /night</p>
          <p>The ability to change the day cycle.</p>
        </div>
      ),
      image: daycCycleGif
    },
    {
      name: 'Fix Command',
      description: (
        <div className="pop-up-prop">
          <p>/fix</p>
          <p>The ability to refill item health.</p>
        </div>
      ),
      image: fixCommandGif
    },
    {
      name: 'Unlimited Fly Speed',
      description: (
        <div className="pop-up-prop">
          <p>/flyspeed</p>
          <p>The ability to select your flying speed.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'enchant',
      description: (
        <div className="pop-up-prop">
          <p>/enchant</p>
          <p>The ability to Get enchants.</p>
        </div>
      ),
      image: enchantedGif
    },
    {
      name: 'SF-Charge',
      description: (
        <div className="pop-up-prop">
          <p>/sfcharge</p>
          <p>The ability to charge slime fun's devices.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'Boss Set',
      description: (
        <div className="pop-up-prop">
          <p>The ability to get two pieces of the archangel boss set.</p>
        </div>
      ),
      image: bossSetPng
    },
    {
      name: 'keep inventory',
      description: (
        <div className="pop-up-prop">
          <p>The ability to keep your items after you die.</p>
        </div>
      ),
      image: null
    },
    {
      name: 'money',
      description: (
        <div className="pop-up-prop">
          <p>How much money you will get in the server's bank.</p>
        </div>
      ),
      image: null
    }
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
                <a href="https://discord.gg/Sy7AEtnpgp">Buy Now</a>
              </Button>
              <hr />
            </div>
            <div className="role-features">
              {i.map((x, index) => (
                <div
                  className="role-feature"
                  key={index}
                  onMouseEnter={e => {
                    e.currentTarget.classList.add('focused');
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.classList.remove('focused');
                  }}
                >
                  <div className="role-pop-up">
                    {rolesProps[index].image ? (
                      <div className="role-pop-up-image">
                        <img src={rolesProps[index].image} alt="description" />
                      </div>
                    ) : (
                      ''
                    )}
                    {rolesProps[index].description}
                  </div>

                  <span className="prop">{rolesProps[index].name}: </span>
                  <span
                    className="value"
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
