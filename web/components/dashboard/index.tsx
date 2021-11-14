import PageTitle from "../title/PageTitle";
import WorkItem from "../Work/WorkItem";

export default function MainDashboard(){

    return (
        <div className="row">
            <div className="col-12">
                <PageTitle title={"داشبورد"} />
                <WorkItem />
            </div>
        </div>
    )
}