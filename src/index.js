import doms from './dom';
import handlers from './handlers';

const dom = doms();
handlers.listenClicks();
dom.renderProjects();
