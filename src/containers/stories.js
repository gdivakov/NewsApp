import {connect} from 'react-redux';
import StoriesList from '../components/StoriesList';
import * as storiesActions from '../actions/stories';

const mapStateToProps = state => {
  const isLoadingActive = state.app.loadingActive;

  return {
    stories: state.stories.data,
    isLoadingActive,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchStories: () => storiesActions.fetchStories(dispatch),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoriesList);
