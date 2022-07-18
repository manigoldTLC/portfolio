import Carousel from 'react-elastic-carousel';
import Item from './Item.js';
import styles from './Carousel.module.scss';


const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 1 },
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 4 },
];

const CarouselComponent = () => {

	let widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	return (
		<Carousel showArrows={widthWindow <= 1200 ? false : true} pagination={false} breakPoints={breakPoints} className={styles.Carousel}>
			<Item>One</Item>
			<Item>Two</Item>
			<Item>Three</Item>
			<Item>Four</Item>
			<Item>Five</Item>
			<Item>Six</Item>
			<Item>Seven</Item>
			<Item>Eight</Item>
		</Carousel>

	);
}

export default CarouselComponent;