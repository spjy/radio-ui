<template>
  <div>
    <form>
      <textarea id="incoming"></textarea>
      <button type="submit">submit</button>
    </form>
    <pre id="outgoing"></pre>
  </div>
</template>

<script>
import Peer from 'simple-peer';

export default {
  mounted() {
    const p = new Peer({ initiator: window.location.hash === '#1', trickle: false });

    p.on('error', err => console.log('error', err));

    p.on('signal', (data) => {
      console.log('SIGNAL', JSON.stringify(data));
      document.querySelector('#outgoing').textContent = JSON.stringify(data);
    });

    document.querySelector('form').addEventListener('submit', (ev) => {
      ev.preventDefault();
      p.signal(JSON.parse(document.querySelector('#incoming').value));
    });

    p.on('connect', () => {
      console.log('CONNECT');
      p.send(Math.random());
    });

    p.on('data', (data) => {
      console.log(data);
    });
  },
};
</script>

<style>
#outgoing {
  width: 600px;
  word-wrap: break-word;
  white-space: normal;
}
</style>
