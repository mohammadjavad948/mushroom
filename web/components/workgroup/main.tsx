import PageTitle from "../title/PageTitle";
import Button from "../form/Button";
import WorkGroupItem from "./WorkGroupItem";
import {useQuery} from "react-query";
import {allWorkGroups} from "../../api/workGroup";

export default function MainWorkGroup(){

    const {data} = useQuery(
        ['workgroups'],
        allWorkGroups
    )

    return (
        <div className="d-flex" style={{flexWrap: 'wrap'}}>
            <PageTitle title={"گروه"}>
                <Button>
                    گروه جدید
                </Button>
            </PageTitle>
            <div style={{width: '100%', gap: '10px', display: 'flex', flexDirection: 'column'}}>
                {data?.data.map((el, i) => {
                    return <WorkGroupItem key={i}/>
                })}
            </div>
        </div>
    )
}