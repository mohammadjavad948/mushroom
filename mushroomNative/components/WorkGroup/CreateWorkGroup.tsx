import React from "react";
import {ScrollView} from "react-native";
import {FormikHelpers} from "formik";
import {createWorkGroup} from "../../api/workGroup";
import {useQueryClient} from "react-query";
import {useHistory} from "react-router-native";
import WorkGroupForm from "./WorkGroupForm";

export default function CreateWorkGroup(){

    const client = useQueryClient();
    const history = useHistory();

    async function submit(value: any, helper:FormikHelpers<any>){
        helper.setSubmitting(true)
        try {
            await createWorkGroup(value);

            helper.setSubmitting(false)
            client.invalidateQueries('workGroups');
            history.push('/workgroup')

        } catch (e) {
            helper.setSubmitting(false)
        }
    }

    return (
        <ScrollView style={{
            flex: 1
        }}>
            <WorkGroupForm
                submit={submit}
                init={{ name: '', color: '#ffffff', isPrivate: true }}
            />
        </ScrollView>
    )
}