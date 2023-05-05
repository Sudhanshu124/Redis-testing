import Redis from 'ioredis';
import Leader from './leader';

const redis = new Redis();
const leader = new Leader(redis);

leader.on('elected', () => {
  console.log('I am the leader now!');
});

leader.on('revoked', () => {
  console.log('I am no longer the leader.');
});

leader.elect();

setTimeout(() => {
  leader.stop();
}, 10000);
