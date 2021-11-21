import PageTitle from "../title/PageTitle";
import Button from "../form/Button";

export default function MainWorkGroup(){

    return (
        <div className="row">
            <PageTitle title={"گروه"}>
                <Button>
                    گروه جدید
                </Button>
            </PageTitle>
        </div>
    )
}