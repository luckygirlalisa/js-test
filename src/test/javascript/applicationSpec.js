describe('Application test', function () {
    it('should calculate maximum value from a sequence', function () {
        application = new Application();
        expect(application.add(1, 2)).toBe(3);
    });
});