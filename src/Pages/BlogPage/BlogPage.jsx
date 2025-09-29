import React from "react";

const BlogPage = () => {
  return (
    <div>
      <div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">
            What is useState and how does it work in React?
          </div>
          <div className="collapse-content text-sm">
            useState is a React hook that lets a component remember values. It
            gives me a variable and a function to update it, and when I update,
            React re-renders the UI with the new value.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            What is the purpose of useEffect in React?
          </div>
          <div className="collapse-content text-sm">
            useEffect is used to handle side effects in functional components.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            What is a custom hook in React and when should you use one?
          </div>
          <div className="collapse-content text-sm">
            A custom hook in React is a reusable function that starts with use
            and lets you share logic between components by using built-in hooks
            like useState or useEffect.
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Difference between controlled and uncontrolled components? Which one
            is better?
          </div>
          <div className="collapse-content text-sm">
            <ul>
              <li>
                Controlled components are generally better because React knows
                the state at all times.
              </li>
              <li>Easier to validate, manipulate, and reset forms.</li>
              <li>
                Uncontrolled components are fine for simple forms or when you
                don’t need to track state.
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">
            Tell us something about useFormStatus() (explore and explain)
          </div>
          <div className="collapse-content text-sm">
            useFormStatus() is a React hook that lets you know the current
            status of a form submission. It tells you: pending → whether the
            form is submitting data → the form data being submitted method →
            HTTP method (GET or POST) action → the function or URL handling the
            form
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
