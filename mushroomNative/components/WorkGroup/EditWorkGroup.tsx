import React from 'react';
import {ScrollView} from 'react-native';
import {FormikHelpers} from 'formik';
import {getWorkGroup, updateWorkGroup} from '../../api/workGroup';
import {useQuery, useQueryClient} from 'react-query';
import {useHistory, useParams} from 'react-router-native';
import WorkGroupForm from './WorkGroupForm';
import {ActivityIndicator} from 'react-native-paper';

export default function EditWorkGroup() {
  const params = useParams<{id: number}>();
  const client = useQueryClient();
  const history = useHistory();

  const {data, isLoading} = useQuery(['workGroup', {id: params.id}], () =>
    getWorkGroup(params.id),
  );

  async function submit(value: any, helper: FormikHelpers<any>) {
    helper.setSubmitting(true);
    try {
      await updateWorkGroup(+params.id, value);

      helper.setSubmitting(false);
      client.invalidateQueries('workGroup');
      history.push('/workgroup');
    } catch (e) {
      helper.setSubmitting(false);
    }
  }

  return (
    <ScrollView
      style={{
        flex: 1,
      }}>
      {isLoading && <ActivityIndicator size={25} />}
      {!isLoading && (
        <WorkGroupForm isEdit={true} submit={submit} init={data?.data} />
      )}
    </ScrollView>
  );
}
