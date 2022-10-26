export default function FormModal({ open, close }: { open: any; close: any }) {
  if (!open) {
    return null;
  } else {
    return (
      <div className="row">
        <form className="col s12">

          <div className="row">
            <div className="col s12">
              <button onClick={close} className="btn black">
                <i className="material-icons">arrow_back</i>
              </button>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">arrow_back</i>
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          
        </form>
      </div>
    );
  }
}
