import icons from 'url:../../img/icons.svg';
import previewView from './previewView.js';
import View from './view.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No results found.';
  _successMessage = '';

  _generateMarkup() {
    return this._data.map((result) => {
      return previewView.render(result, false);
    }).join('');
  }
}

export default new ResultsView();
