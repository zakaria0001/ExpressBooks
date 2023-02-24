import wallpaper from '../../assets/logo/goodLogo.png';
import logo from '../../assets/logo/smalllogo.png';
import loginverify from '../../assets/func/loginverify.js';
const stylebg = {
    backgroundImage: `url(${wallpaper})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundAttachment: 'fixed',
    backgroundBlendMode: 'overlay',
    backgroundClip: 'border-box',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundOrigin: 'padding-box',
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    backgroundRepeatX: 'no-repeat',
    backgroundRepeatY: 'no-repeat',
    backgroundSizeX: 'cover',
    backgroundSizeY: 'cover',
};

const Admin = () => {
    return (
<div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={stylebg}>
  <div class="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
    <div class="text-white">
      <div class="mb-8 flex flex-col items-center">
        <img src={logo} width="150" alt="" srcset="" />
        <h1 class="mb-2 text-2xl">Express Books</h1>
        <span class="text-gray-300">Enter Login Details</span>
      </div>
      <form action="#">
        <div class="mb-4 text-lg">
          <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="text" name="name" placeholder="id@email.com" />
        </div>

        <div class="mb-4 text-lg">
          <input class="rounded-3xl border-none bg-yellow-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" type="Password" name="name" placeholder="*********" />
        </div>
        <div class="mt-8 flex justify-center text-lg text-black">
          {/* verify if email and password are correct */}
          <button type="submit" onClick={loginverify()} class="rounded-3xl bg-yellow-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
    };
export default Admin;