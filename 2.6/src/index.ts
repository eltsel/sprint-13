
enum TimeOfGreeting {
    morning = 'Good Morning',
    afternoon = 'Good Afternoon',
    evening = 'Good Evening'
  }
  
  interface Customer {
    loyal: boolean;
    name: string;
    visits: number;
  }
  
  const customerGreeting = (time_of_day: TimeOfGreeting, customer: Customer): string => {
    const loyal = 'Thank you for being a valued customer!';
    const notLoyal = 'If you join our loyalty program, you can get a free cup of coffee today!';
    let greeting = `${time_of_day} ${customer.name}! `
    
    greeting += customer.loyal ? loyal : notLoyal;
   
    return greeting
  }
  
  
  
  const gabriel: Customer = {
    loyal: true,
    name: 'Gabriel',
    visits: 2
  }
  
  console.log(customerGreeting(TimeOfGreeting.morning, gabriel));