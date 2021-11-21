import PageTitle from "../title/PageTitle";
import Button from "../form/Button";
import WorkGroupItem from "./WorkGroupItem";

export default function MainWorkGroup(){

    return (
        <div className="d-flex" style={{flexWrap: 'wrap'}}>
            <PageTitle title={"گروه"}>
                <Button>
                    گروه جدید
                </Button>
            </PageTitle>
            <div style={{width: '100%'}}>
                <WorkGroupItem />
            </div>
        </div>
    )
}