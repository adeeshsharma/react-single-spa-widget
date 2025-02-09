import Carousel from './Carousel';
import './carousel.css';

const roots = new Map();

export function mount(props) {
  return new Promise((resolve, reject) => {
    try {
      const { domElement } = props;
      let root = roots.get(domElement);
      if (!root) {
        root = window.ReactDOM.createRoot(domElement);
        roots.set(domElement, root);
      }
      root.render(<Carousel />);
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}

export function unmount(props) {
  return new Promise((resolve, reject) => {
    try {
      const { domElement } = props;
      if (roots.has(domElement)) {
        roots.get(domElement).unmount();
        roots.delete(domElement);
      }
      resolve();
    } catch (error) {
      reject(error);
    }
  });
}
