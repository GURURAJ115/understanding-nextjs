export default function Home() {
  return (
    <div>
      <Button>Sign Up</Button>
      <Button>Sign In</Button>
    </div>
  );
}

function Button({children}){
  return <button>{children}</button>
}