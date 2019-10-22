import React from 'react';
import { connect } from 'react-redux';
import { selectNews } from "redux/news/selectors";
import { getNews } from "redux/news/actions";
import { Tab, Button, Icon, Dimmer, Loader } from 'semantic-ui-react';
import Network from 'utils/network';

class Nieuws extends React.Component {
  state = {
    lastPage: 1,
    currentPage: 1,
    pages: null,
    loading: true,
  }

  async componentDidMount() {
    await this.props.getNews((this.state.currentPage - 1) * 10);
    Network.get('api/news/count/').then((res) => {
      var ele = []
      for (let i = 0; i < Math.ceil(res.length / 10); i++) {
        ele.push(i + 1);
      }
      this.setState({ loading: false, pages: ele });
    });
  }

  componentDidUpdate() {
    const { lastPage, currentPage } = this.state;
    if (lastPage !== currentPage) {
      this.props.getNews((currentPage - 1) * 10).then(() => {
        this.setState({ lastPage: currentPage })
      });
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
    const { currentPage, pages } = this.state;
    const { openArtikelModal, nieuws } = this.props;

    if (this.state.loading) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

    if (!nieuws) return (
      <Dimmer active inverted>
        <Loader inverted />
      </Dimmer>);

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
        {!nieuws.length && ( <p>Geen nieuws artikels</p> )}
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
        {pages.length > 1 && pages.map(page => (
          <p className={page === parseInt(currentPage, 10) ? "active" : ""} key={page} onClick={() => this.pageSet(page)}>{page}</p>
        ))}
        {currentPage < pages.length && (<p onClick={() => this.pageUp()}>Verder</p>)}
      </div>
    </Tab.Pane>;
  }
}

const mapDispatchToProps = {
  getNews,
};

const mapStateToProps = state => ({
  nieuws: selectNews(state),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nieuws);
