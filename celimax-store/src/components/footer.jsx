
function Menu({ list }) {
  const year = new Date().getFullYear();
  return (
    <div>
      <ul className='text-sm'>
        {Object.entries(list).map(([url, title]) => (
          <a key={Math.floor(Math.random()*1000)} className='hover:font-medium hover:text-rose-400 transition-colors' href={url}>
            <li>{title}</li>
          </a>
        ))}
      </ul>
      <span className='text-xs p-4 block text-gray-400'>© ООО «Celimax», {year}</span>
    </div>
  );
}

function LogoBlock({  url, title }) {
  return (
    <a href={url}>
      <div className='flex font-black text-xl items-center gap-4'>
        <span className='text-rose-400'>{title}</span>
      </div>
    </a>
  );
}

export default function Footer() {
  const menu = {
    "/": 'Каталог',
    "/about": 'О бренде'
  };
  
  return (
    <footer className="bg-gray-900">
      <div className='container mx-auto flex text-white px-10 py-8 justify-between flex-wrap gap-4'>
        <LogoBlock url='/' title='Celimax' />
        <Menu list={menu} />
      </div>
    </footer>
  );
}