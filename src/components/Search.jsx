var debounce;
var Search = ({handleChange}) => {
  const [getQuery, setGetQuery] = React.useState('');

  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" value={getQuery} onChange={(event) => {
        setGetQuery(event.target.value);
        clearTimeout(debounce);
        debounce = setTimeout(() => handleChange(getQuery, 500));
      }}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
