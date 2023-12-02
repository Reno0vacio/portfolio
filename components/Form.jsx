"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  PhoneCall,
  MessageSquare,
} from "lucide-react";

import { useState } from "react";

const Form = () => {
  const [loading, setLoading] = useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: event.target.name.value.trim(),
      email: event.target.email.value.trim(),
      phone: event.target.phone.value.trim(),
      message: event.target.message.value.trim(),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent success");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.phone.value = "";
      event.target.message.value = "";
    }

    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }

    const response2 = await fetch("/api/contact_business", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response2.ok) {
      console.log("Message sent success");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.phone.value = "";
      event.target.message.value = "";
    }

    if (!response2.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
      {/* name */}
      <div className="relative flex items-center">
        <Input required type="text" id="name" name="name" placeholder="Name" />
        <User className="absolute right-6" size={20} />
      </div>
      {/* email */}
      <div className="relative flex items-center">
        <Input
          required
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* phone */}
      <div className="relative flex items-center">
        <Input required name="phone" type="number" placeholder="Telefonszám" />
        <PhoneCall className="absolute top-4 right-6" size={20} />
      </div>
      {/* textarea */}
      <div className="relative flex items-center">
        <Textarea required name="message" placeholder="Üzenet leírása..." />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      {/* submit button */}
      <Button
        type="submit"
        disabled={loading}
        className="flex items-center gap-x-1 max-w-[166px] disabled:text-gray-500"
      >
        Küldés
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
