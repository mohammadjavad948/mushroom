import React from "react";
import {ScrollView} from "react-native";
import {addWorkStyle} from "../../styles/AddWork";
import AddWorkForm from "./AddWorkForm";
import {FormikHelpers} from "formik";
import {createWork} from "../../api/work";

export default function AddWork(){

    async function submit(value: any, helper: FormikHelpers<any>){
        try {
            await createWork(value);
            helper.setSubmitting(false);
            helper.setValues({
                title: "",
                description: "",
                groupId: null,
                dueDate: new Date()
            });
        } catch (e){
            console.log(e)
            helper.setSubmitting(false);
        }
    }
    
    return (
        <ScrollView style={addWorkStyle.container}>
            <AddWorkForm 
                submit={submit}
                init={{
                    title: "",
                    description: "",
                    groupId: null,
                    dueDate: new Date()
                }}
            />
        </ScrollView>
    )
}