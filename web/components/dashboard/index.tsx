import PageTitle from "../title/PageTitle";
import WorkItem from "../Work/WorkItem";

export default function MainDashboard(){

    return (
        <div className="d-flex" style={{flexWrap: 'wrap'}}>
            <div style={{width: '100%'}}>
                <PageTitle title={"داشبورد"} />
                <WorkItem />
            </div>
        </div>
    )
}