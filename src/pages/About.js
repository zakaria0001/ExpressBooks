import Logo from '../assets/logo/goodLogo.png';

const About = () => {
  return (
    <div className="bg-[#bfb6b6c0] 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
           

    <div className="lg:w-12/12 w-full">
    <img className="lg:block float-right  w-90 h-60" src={Logo} alt="Group of people Chilling" />

        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">Nous sommes ici pour rendre les grands livres accessibles  pour tout le monde</h2>
       
        <p className="font-normal text-base leading-6 text-gray-600 mt-6">C'est un fait établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page. Le point d'utiliser le Lorem Ipsum. En premier lieu, nous avons accordé à Dieu, et par cela notre charte actuelle a confirmé pour nous et nos héritiers pour toujours que l'Église anglaise sera libre et aura ses droits entiers,</p>
    </div>

    <div className="lg:mt-14 sm:mt-10 mt-12">
        <img className="lg:hidden sm:block hidden w-full" src="https://i.ibb.co/5sZTmHq/Rectangle-116.png" alt="Group of people Chilling" />
        <img className="sm:hidden block w-full" src="https://i.ibb.co/zSxXJGQ/Rectangle-122.png" alt="Group of people Chilling" />
    </div>

    <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">Our Story</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-4">C'est un fait établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page. Le point d'utiliser le Lorem Ipsum. En premier lieu, nous avons accordé à Dieu, et par cela notre charte actuelle a confirmé pour nous et nos héritiers pour toujours que l'Église anglaise sera libre et aura ses droits entiers,</p>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6">C'est un fait établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page lorsqu'il regarde sa mise en page. Le point d'utiliser le Lorem Ipsum. En premier lieu, nous avons accordé à Dieu, et par cela notre charte actuelle a confirmé pour nous et nos héritiers pour toujours que l'Église anglaise sera libre et aura ses droits entiers,</p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
            <img className="lg:block hidden w-full" src="https://i.ibb.co/2kxWpNm/Group-740.png" alt="people discussing on board" />
            <img className="lg:hidden sm:block hidden w-full h-3/4" src="https://i.ibb.co/ZLgK3NQ/Group-788.png" alt="people discussing on board" />
            <img className="sm:hidden block w-full" src="https://i.ibb.co/9g2R7Xr/Group-803.png" alt="people discussing on board" />
        </div>
    </div>
</div>
  )
};

export default About;