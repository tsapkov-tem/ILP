using ILP.Core.Data.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace ILP.Core.Data.Entities
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Comment> Comments { get; set; }
        public DbSet<Group> Groups { get; set; }
        public DbSet<Lecture> Lectures { get; set; }
        public DbSet<LecturePlan> LecturePlans { get; set; }
        public DbSet<NoteLecture> NoteLectures { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Models.Task> Tasks {  get; set; }
        public DbSet<User> Users { get; set; }
        public DatabaseContext(DbContextOptions options) : base(options) { }
        public DatabaseContext() { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder
                .Entity<Group>()
                .HasMany(g => g.Users)
                .WithMany(u => u.Groups)
                .UsingEntity<Fellow>(
                    f => f.HasOne(fellow => fellow.User)
                    .WithMany(user => user.Fellows)
                    .HasForeignKey(fellow => fellow.UserId),
                    f => f.HasOne(fellow => fellow.Group)
                    .WithMany(group => group.Fellows)
                    .HasForeignKey(fellow => fellow.GroupId)
                    );

            modelBuilder
                .Entity<Lecture>()
                .HasMany(l => l.Users)
                .WithMany(u => u.Lectures)
                .UsingEntity<VisitLecture>(
                    f => f.HasOne(visit => visit.User)
                    .WithMany(user => user.VisitLectures)
                    .HasForeignKey(visit => visit.UserId),
                    f => f.HasOne(visit => visit.Lecture)
                    .WithMany(lecture => lecture.VisitLectures)
                    .HasForeignKey(visit => visit.LectureId)
                    );
        }
    }
}
