// function AllData(){
//   const ctx = React.useContext(UserContext);
//   return (
//     <>
//     <h5>All Data in Store</h5>
//     {JSON.stringify(ctx)}<br/>
//     </>
//   );
// }

function AllData(){
  const ctx = React.useContext(UserContext);
  const usersList = ctx.users;
  console.log(usersList);

  return (
    <>
      <h5>All Data in Store</h5>
      {/* {JSON.stringify(ctx)}<br/> */}

      <table class="table table-striped">
        <thead class="table-dark">
          <tr class="bg-primary">
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user, i) => (
            <tr key={i}>
              <th scope="row">{i}</th>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>${user.balance}</td>
            </tr>
          ))}
          </tbody>
      </table>

      {/* <div className="card text-white mb-3">
        <div className="card-body">
          <div className="row d-flex justify-content-center text-center">
            <table className="table table-bordered table-responsive" >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">Balance</th>
                </tr>
              </thead>
              <tbody>
                {usersList.map((user, i) => (
                  <tr key={i}>
                    <th scope="row">{i}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>${user.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </>
  );
}