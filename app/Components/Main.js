// Search component
const Search = () => (
    <div className="search">
      <input type="text" placeholder="Project Name, Builder, Agent" class="input1" />
    </div>
  );
  
  // Main component
  const Main = () => (
    <main class="main1">
      <Search />
      {/* Add other components as needed */}
    </main>
  );

  export default Main;