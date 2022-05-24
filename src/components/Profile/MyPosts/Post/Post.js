import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.itemInner}>
                <img
                    src="data:image/webp;base64,UklGRhoFAABXRUJQVlA4WAoAAAAQAAAA4AAA4AAAQUxQSLsBAAARDzD/ERFCbq3tuG29hkCoBKUojdKUogShwOCce5fvey37/kYR/Z8A/MbntQwvr7WWpc2fEquuR0caT4lT1tZS+i5Q5i4xyhJaQpN4wpBEwhLrisyqmsyruiyqpmxp8lIaRdE4RdN4RdcExdAkxVLLss6Iis6Kqs6Lui6Ihi6Kpi6JFlGSGUZQGFZQGU7QGF7QGUEwGFEwGUmwqLvMMWfspnDcpp5pHL/pnHAmbsaZyUmbRX5FZpkz9qGcqSx3xj+0K8JDPzNY8Q2Tld6w6DcZAPkSC6BcVHnuIg+gfaIAoH+iCGB8qslLv6QFYP1mGOQ/B3uq/EeQP5P5HcFnwl3zE6XLxiXxXL8knGuX+HP1EneuXGIB5EvMOfDwgslKbxis+IbOCm9oLP9Qr3AP5Qr7kFnmAVfgeXLSZlwQN50TNo3jN5XjNuUCu8kcswEH+3lmMKKgn2mMIKgMLygMJ8gMKwDDSKYuQTrOdF0QNZ0XVZ0TZZ0RQQf51CRF10RF03hF0ThF1hgFpgLaIYuqJvOqIrMqyKAfkkhoEk8oEkvAFIDZd4FSdpaC+ZTArU+ehPkAdvnJ0VDXcvhjBQBWUDggOAMAALAlAJ0BKuEA4QA+kUadSaWkIyEr9DhYsBIJaW7gwUP4BgAECA/AD8QM8AgQD8AL3TQz9N/8nvpn0x0uQnWkpXb+cBRfRlhc+XM19omuSNOZbLJsVyxWjTfFD394XIf0U2PWj13nc2/wAVGd/l77cOkM5QqyYMqZzA6aiq7hTGqnStuaA//8KUc8RSJ/QBVoTiiiVHr3ijzBbhgj1kDTl96L6Jw3eyOHkiER5pB8j1cL0E/+VNZAgw9FLbkENGV0p3KXXt0gwO1EV6sAWoTpDp2XWVBIdyh7gGPdGfUlIBN7wETr32sp1roMbbkj6Sba5QqK/90F9FWx/DV8yymM/fHr3i4q74Fn0a8gAszzQfqSoUVdtp2+RxvihQC3Kmq9fOi0J4SqnRJwQQ7HZSzWSMLegTG+I4AA/RWxos3//7kuDLo35T5nELv34wZ4ADv34wJowJscDRnPUMztYTBnyQiDNvdLRSp4lILR9k+7UfUxJ4chVEOnDETB58ear2L12gUhEKoXiUZ+i6KgS2Ig3oFLbM9RobtsSxiGRhMsc8b4Sdxox3uSsAbezke86r+YeLTJbs425fd1zEJZ7ge30Yv4yJbTeeGzhGLa6l7wlKBLLZaH12gCAKL9Le01fNtQUjhf/zLSqzLVvAgnl9nv9Mw4xleDktG9jHqNURiw8+prhILvZV+Wo7JjeEma8vvNCkqM1f3tc9od6Hz30la+kbfaiyA6PVlwjZfcAbRNOJ3knMY+lHwZ4XuywMKk6Op7CfFCA8eAuDr2dWEjj64wBQ2jYP5D34AtyAlmLfoOO28GrEo6NrkNd3Lm/HHbmpzI807uomVwuULLgAkKu4iykeunh21mBNzXObn5jTV2I9ppbeEXDjOyjiVhI9qkExkWaprizc4JIY/P3+loibUaOpTmQMEr9sgMM1wcDWT5Df2VQqkMYqP6DWzzIbMJ0WgZO8CfUQlHrP5kq8S0E+HnTxtZ1+X5ta+RzFiXxBBojTOWu5OvlZWslBs+1nA5JEztbMd2uPLLRm/hkskJnCJ9BV4aQWTYOYihkIs9BQP6rTyD/ZVCqAJwb68/zKMYDgXHNUI+JXWgAAAA"
                    alt="avatar"/>
                <span>{props.message}</span>
            </div>
            <p>like: {props.likes}</p>
        </div>
    )
}

export default Post;