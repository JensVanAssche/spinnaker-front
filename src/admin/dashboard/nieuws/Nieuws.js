import React from 'react';
import { Tab, Button, Icon } from 'semantic-ui-react';
import Network from 'utils/network';

class Nieuws extends React.Component {
  state = {
    lastPage: 1,
    currentPage: 1,
    pages: null,
    nieuws: null,
  }

  componentDidMount() {
    Network.get('api/news/all/' + ((this.state.currentPage - 1) * 10)).then((res) => 
      this.setState({ nieuws: res })
    );

    Network.get('api/news/count/').then((res) => {
      var ele = []
      for (let i = 0; i < Math.ceil(res.length / 10); i++) {
        ele.push(i + 1);
      }
      this.setState({ pages: ele });
    });
  }

  componentDidUpdate() {
    const { lastPage, currentPage } = this.state;
    if (lastPage !== currentPage) {
      Network.get('api/news/all/' + ((currentPage - 1) * 10)).then((res) => 
        this.setState({ nieuws: res, lastPage: currentPage })
      );
    }
  }

  pageSet = page => this.setState({ currentPage: page });

  pageUp = () => {
    this.setState(prevState => ({
      ...prevState.data,
      currentPage: prevState.currentPage + 1,
    }));
  }

  pageDown = () => {
    this.setState(prevState => ({
      ...prevState.data,
      currentPage: prevState.currentPage - 1,
    }));
  }

  render() {
    const { currentPage, pages, nieuws } = this.state;
    const { openArtikelModal } = this.props;

    if (!nieuws || !pages) return null;

    return <Tab.Pane>
      <div className="dashboard-item">
        <div className="dashboard-flex">
          <h1>Nieuws</h1>
          <Button icon primary className="small-button" onClick={() => openArtikelModal('Artikel toevoegen')}>
            <span>Artikel</span>
            <Icon name="add" />
          </Button>
        </div>
      </div>
      <div>
        {!nieuws.length && ( <p>Geen nieuws</p> )}
        {nieuws.map(artikel => (
          <div className="dashboard-item" key={artikel.id}>
            <div className="dashboard-flex">
              <div>
                <h2>{artikel.title}</h2>
                <p>{artikel.date}</p>
                <img src={process.env.REACT_APP_API_HOST + artikel.image} alt="eumm" />
                <p dangerouslySetInnerHTML={{__html: artikel.body.substring(0,255)+"..."}} />
              </div>
              <Button icon className="small-button" onClick={() => openArtikelModal('Artikel aanpassen', artikel)}>
                <Icon name="edit" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {currentPage > 1 && (<p onClick={() => this.pageDown()}>Terug</p>)}
        {pages.map(page => (
          <p className={page === parseInt(currentPage, 10) ? "active" : ""} key={page} onClick={() => this.pageSet(page)}>{page}</p>
        ))}
        {currentPage < pages.length && (<p onClick={() => this.pageUp()}>Verder</p>)}
      </div>
    </Tab.Pane>;
  }
}

export default Nieuws;
