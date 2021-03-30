clc;clear all;clf;
t=[0:0.01:4.4*%pi];
A=5;
wc=5;
Vm=A.*squarewave(t);
Vc=A.*cos(wc.*t);
fc=wc/(2*%pi);

subplot(3,1,1);
plot(t,Vm, 'red');
xlabel("Time")
ylabel("Amplitude of Message Signal")

subplot(3,1,2);
plot(t,Vc, 'green');
xlabel("Time")
ylabel("Amplitude of Carrier Signal")

fd=0.5; //frequency deviation
subplot(3,1,3);
Vf=A.*cos(2.*%pi.*(fc+Vm.*fd).*t);
plot(t,Vf, 'blue');
xlabel("Time")
ylabel("Amplitude of FSK Signal")
