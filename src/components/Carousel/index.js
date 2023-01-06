import Carousel from 'react-elastic-carousel';
import styles from './Carousel.module.scss';
import ProjetoCard from './ProjetoCard';

import img1 from '../../assets/imagensProjetos/projeto1.png';
import img2 from '../../assets/imagensProjetos/projeto2.png';
import img3 from '../../assets/imagensProjetos/projeto3.png';
import img4 from '../../assets/imagensProjetos/projeto4.png';
import img5 from '../../assets/imagensProjetos/projeto5.png';
import img6 from '../../assets/imagensProjetos/projeto6.png';
import img7 from '../../assets/imagensProjetos/projeto7.png';
import img8 from '../../assets/imagensProjetos/projeto8.png';
import img9 from '../../assets/imagensProjetos/projeto9.png';
import img10 from '../../assets/imagensProjetos/projeto10.png';

const breakPoints = [
	{ width: 1, itemsToShow: 1 },
	{ width: 550, itemsToShow: 1 },
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 4 },
];


const CarouselComponent = () => {

	let widthWindow = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

	const projetos = [
        {
            "titulo": "Movies App",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imagem": img1,
            "id": 1,
			style: {
				backgroundColor: "#8B0016"
			},
			"link": "https://www.linkedin.com/posts/gabriel-xavier-cardoso-04080217b_react-reactnative-github-activity-6869299704648339456-vdUR?utm_source=linkedin_share&utm_medium=member_desktop_web"
        },

		{
            "titulo": "Gatito petshop",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imagem": img9,
            "id": 9,
			"link": "https://gatito-petshop.vercel.app/index.html"
        },

		{
			"titulo": "Contagem de estudos",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imagem": img8,
            "id": 8,
			style: {
				backgroundColor: "#171717"
			},
			"link": "https://alura-studies-gold.vercel.app/"
        },

		{
            "titulo": "Apeperia",
            "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "imagem": img10,
            "id": 10,
			style: {
				backgroundColor: "#131C28"
			},
			"link": "https://apeperia-sigma.vercel.app/"
        },

		// {
		// 	"titulo": "Galeria de Artes",
		// 	"descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		// 	"imagem": img2,
		// 	"id": 2,

		// },

		{
			"titulo": "MusicDot",
			"descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			"imagem": img6,
			"id": 6,
			style: {
				backgroundColor: "#1C4E76"
			},
			"link": "https://music-dot-nu.vercel.app/"
		},

		// {
		// 	"titulo": "Eventos",
		// 	"descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		// 	"imagem": img5,
		// 	"id": 5,
		// 	style: {
		// 		backgroundColor: "#ECD235"
		// 	}
		// },

        // {
        //     "titulo": "Simple and Modern Design System",
        //     "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        //     "imagem": img3,
        //     "id": 3,

        // },
		
		// {
		// 	"titulo": "Dualsense 5",
		// 	"descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		// 	"imagem": img4,
		// 	"id": 4,
		// 	style: {
		// 		backgroundColor: "#2C2B30"
		// 	}
		// },

		// {
		// 	"titulo": "Linguagens de programação",
		// 	"descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		// 	"imagem": img7,
		// 	"id": 7,
		// 	"link": "https://pokedex-gray-beta.vercel.app/"
		// },
    ]

	return (
		<Carousel
			pagination={false}
			breakPoints={breakPoints}
			className={styles.Carousel}
			enableAutoPlay={true}
			autoPlaySpeed={5000}
		>
			{projetos?.map(projeto => (
				<ProjetoCard
					key={projeto.id}
					imagem={projeto.imagem}
					titulo={projeto.titulo}
					styled={projeto.style}
					link={projeto.link}
				/>
			))}
		</Carousel>

	);
}

export default CarouselComponent;