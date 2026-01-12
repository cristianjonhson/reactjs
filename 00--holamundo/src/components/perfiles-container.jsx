import PerfilX from './perfil-x';

const perfiles = [
  {
    foto: 'https://pbs.twimg.com/profile_images/1817823055202205696/Jh40yNnz_400x400.jpg',
    nombre: 'Kate Miller',
    usuario: 'KateMillerGems',
    verificado: true,
  },
  // Puedes agregar más perfiles aquí
];

export default function PerfilesContainer() {
  return (
    <div className="perfil-lista">
      {perfiles.map((perfil) => (
        <PerfilX key={perfil.usuario} {...perfil} />
      ))}
    </div>
  );
}
