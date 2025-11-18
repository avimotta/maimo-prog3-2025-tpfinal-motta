"use client";

import { Formik, Form, Field } from "formik";
import { useShopContext } from "@/app/contexts/ShopContext";

function validateEmptyText(value) {
    let error;
    if (value === '') {
        error = 'Required!';
    }
    return error
}

const ReviewForm = ({ productId, onSubmitSuccess }) => {
  const { addReview } = useShopContext();  

  return (
    <div className="mt-10 w-full flex flex-col justify-center items-center">
      <h3 className="text-xl font-bold text-[#090808] mb-4 text-center">
        Leave your own review
      </h3>

      <Formik
        initialValues={{ user: "", comment: "" }}
        onSubmit={async (values, { resetForm }) => {
          try {
            await addReview(productId, values); 
            resetForm();
            onSubmitSuccess && onSubmitSuccess();
          } catch (err) {
            console.error("Error al enviar reseña:", err);
          }
        }}
      >
        <Form className="flex flex-col gap-4 w-full max-w-sm">
          <Field
            name="user"
            placeholder="Your nick here"
            className="
              border-2 border-[#FF5454]
              rounded-lg
              p-3
              shadow-[3px_3px_0px_0px_#FF5454]
              text-[#090808]
              placeholder-gray-400
            "
            validate={validateEmptyText}
          />

          <Field
            as="textarea"
            name="comment"
            placeholder="Share your thoughts..."
            className="
              border-2 border-[#FF5454]
              rounded-lg
              p-3
              h-32
              shadow-[3px_3px_0px_0px_#FF5454]
              text-[#090808]
              placeholder-gray-400"
              validate={validateEmptyText}
          />

          <button
            type="submit"
            className="
              bg-[#0A0BF9] text-white font-semibold
              py-3 rounded-lg mt-2
              shadow-[3px_3px_0px_0px_rgba(9,8,8,1)]
            "
          >
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ReviewForm;
