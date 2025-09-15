import type { FieldError } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { ValidationError } from './ValidationError';
import type { NewPost } from '../types'

type Props = {
  onSave: (newPost: NewPost) => void;
};

export function NewPostForm({ onSave }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewPost>();



  return (
    <form noValidate onSubmit={handleSubmit(onSave)}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" 
          {...register('title', {
            required: 'You must enter a title',
          })}
          />

          <ValidationError fieldError={errors.title} />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" 
          {...register('description', {
            required: 'You must enter a description',
          })}
          />
          <ValidationError fieldError={errors.description} />
      </div>

      <div>
        <button type="submit" disabled={isSubmitting}>Saved</button>

        {isSubmitSuccessful && (
          <div role="alert">
            The post was successfully saved
          </div>
        )}
      </div>
    </form>
  );
}