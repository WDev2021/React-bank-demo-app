function Home(){
  return (
    <Card
      bgcolor="primary"
      header="WELCOME TO THE BANK"
      title="For all your banking needs"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
