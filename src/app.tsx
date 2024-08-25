function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl p-6 text-center">
        <div className="flex flex-col items-center gap-3">
          <img src="logo.svg" alt="plann.er" />
          <h1 className="text-zinc-300">Convide seus amigos e planejem sua próxima viagem</h1>
        </div>
        <p className="text-zinc-500 text-sm">Ao planejar a viagem pela plann.er você automaticamente concorda<br />
          com nossos
          <a href="" className="text-zinc-300 underline"> termos de uso </a>e <a href="" className="text-zinc-300 underline">políticias de privacidade </a>
        </p>
      </div>
    </div>
  );
}

export { App };

