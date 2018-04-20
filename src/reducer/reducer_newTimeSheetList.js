
import DataNewTSLApi from './reducer_newTSDataApi';
import dataTS from './newTimeSheet.json';
/*
https://stackoverflow.com/questions/31758081/loading-json-data-from-local-file-into-react-js/33141549
var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "data.json", true);
oReq.send();

function dataTS(e) {
    data = JSON.parse(this.responseText);
}
*/
const api = new DataNewTSLApi(dataTS)


const NewTimeSheet = {
    serviceCenter: '',
    jtnCode: '',
    vendorName: '',
    vendorReferenceNumber: '',
    poNumber: '',
    workDate: '',
    tsPKId: '',
    contractNumber: '',
    deleted: [],
    events: [
        {
            eventPKId: '',
            eventType: '',
            eventStatus: '',
            eventID: '',
            isUnitBilling: '',
            workLocation: '',
            workDescription: '',
            contractNumber: '',
            units:[],
        }
    ],
};

/*
const _newTimeSheetList = (props) => {
    return (
        <div>
            {Object.values(props.articles).map(article =>
                <Article
                    key={article.id}
                    article={article}
                    actions={props.articleActions}
                />
            )}
        </div>
    );
};


class newTimeSheetList extends React.Component {
    constructor() {
        super();
        this.state = {
            events: api.getEvents(),
            units: api.getUnits(),
        };
    }
    eventsActions = {
        lookupAuthor: eventId => this.state.units[eventId],
    };
    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                articleActions={this.articleActions}
            />
        );
    }
}

*/

export default function newTimeSheetList(state = NewTimeSheet) {
   
    state.events = api.getEvents();
   /* var evId = state.events.toLocaleString();
    state.units = api.getUnits(evId); /*firs on the list until new changes /
    state.map(...api.getnewTS("0")); */
    return state;
      
    }

